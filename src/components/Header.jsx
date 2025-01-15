import FilminLogo from "../assets/img/filminLogo.svg"
export default function Header(){

    return(
        <header style={styles.header}>
            <img src={FilminLogo} alt="Filmin Logo" />
        </header>
    )
}

const styles = {
    header: {
      backgroundColor: '#060715',
      width: '100%',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

    }
  };