import { Link, useLocation } from 'react-router-dom';
import Header from './UI/Header';

export default function Nav () {
    const currentPage = useLocation().pathname;
    return (
        <Header 
            links={[
                <Link className={currentPage === '/' ? 'active': 'not-active'} key={1} to='/'>
                    About Me 
                </Link>,
                <Link className={currentPage === '/portfolio' ? 'active': 'not-active'} key={2} to='/portfolio'>
                    Portfolio
                </Link>,
                <Link className={currentPage === '/contact' ? 'active': 'not-active'} key={3} to='/contact'>
                Contact 
                </Link>,
                <Link className={currentPage === '/resume' ? 'active': 'not-active'} key={4} to='/resume'>
                Resume 
                </Link>
            ]}
        />
    );
}