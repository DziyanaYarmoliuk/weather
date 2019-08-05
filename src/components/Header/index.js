import React, { PureComponent } from 'react';

import { SearchInput, Button } from '../';
import styles from './style.module.scss';

class Header extends PureComponent {
    render() {
        return(
            <section className={styles.container}>
                <h1 className={styles.title}>Choose your sity</h1>
                <SearchInput />
                <Button />
            </section>
        )
    };
}

export default Header;
