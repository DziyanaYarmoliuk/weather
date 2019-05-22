import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { connect } from "react-redux";

import './styles.scss';

const searchOptions = {
    types: ['(cities)'],
    componentRestrictions: {country: 'SE'},
    language: "en"
};

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            isAdressRight: true
        };
    }

    handleChange = address => {
        this.setState({ address, isAdressRight: true });
    };

    handleSelect = address => {
        this.setState({address});
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.props.updateCoordinates(latLng)
            })
            .catch(error => {
                this.setState({isAdressRight: false})
            });
    };

    render() {
        const { isAdressRight } = this.state
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                searchOptions={searchOptions}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className='input-container'>
                        <input
                            {...getInputProps({
                                placeholder: 'Type your city ...',
                                className: 'location-search-input',
                            })}
                        />

                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'dropdownItemActive'
                                    : 'dropdownItem';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                        {!isAdressRight && (
                            <div>Please, write real city name</div>
                        )}
                    </div>

                )}
            </PlacesAutocomplete>
        );
    }
};

const mapStateToProps = state => {
    return {
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateCoordinates: (cityCoords) => dispatch({ type: "UPDATE_CITY_COORDS_REQUEST", cityCoords})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

