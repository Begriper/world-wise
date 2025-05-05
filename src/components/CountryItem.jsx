import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
    return (
        <li className={styles.countryItem}>
            <img className={styles.emoji} src={country.emoji} alt={`Flag of ${country.country}`} />
            <span>{country.country}</span>
        </li>
    );
}

export default CountryItem;
