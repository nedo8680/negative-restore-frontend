import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavBar() {  
     const { t } = useTranslation();
    return (
        <header className="w-full flex justify-center mx-auto bg-white rounded-lg shadow-md">
            <nav className="container mx-auto flex justify-between px-4 py-3 ">
                <a href="/" className="text-xl font-bold mx-2">
                    <span className='text-orange-logo'>{t('title_ng')}</span>&nbsp;   
                    {t('title_restore')}
                </a>
                
                <ul className="flex list-none justify-between space-x-4 text-base">
                    <li><Link to="/digitize-negatives" className="hover:text-gray-400">{t('nav.digitize')}</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">{t('nav.contact')}</Link></li>
                    {/* <li> <select
                            value={i18n.language}
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            className="bg-gray-100 border-none rounded px-2 py-1"
                            >
                                <option value="en">EN</option>
                                <option value="es">ES</option>
                        </select>
                    </li> */}
                </ul>
               
            </nav>
        </header>
    );
    }