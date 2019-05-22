import React, { Component } from 'react';

import { SearchInput } from '../';
import styles from './style.module.scss';

class Header extends Component {
    render() {
        return(
            <section className={styles.container}>
                <h1 className={styles.title}>Choose your sity</h1>
                <SearchInput />
            </section>
        )
    }
}

export default Header;