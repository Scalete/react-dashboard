import { FC, useRef, useState } from 'react'
import styles from './Home.module.scss'
import { Customer, data } from '../../api/Customer';

interface HomeProps {
    setSidebarIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: FC<HomeProps> = ({setSidebarIsActive}) => {

    //template customers
    let dataCustomers: Customer[] = data;

    const [searchValue, setSearchValue] = useState<string>('');
    const searchRef = useRef<HTMLInputElement>(null);

    const renderCustomerStatus = (customer: Customer): string => {
        return customer.status?.toLocaleLowerCase() === 'active' ? styles.active: styles.inactive
    }
    
    const renderCustomers = () => {
        const lowerSearchValue = searchValue.toLowerCase();

        return dataCustomers
            .filter((customer) => {
                const customerData = {...customer};
                delete customerData.status;

                return Object.values(customerData).some(field =>
                    field?.toString().toLowerCase().includes(lowerSearchValue)
                ) || 
                customer.status?.toLowerCase().substring(0, lowerSearchValue.length) === lowerSearchValue;
            })
            .map((customer, i) => (
                <tr key={i}>
                    <td><div>{customer.fullName}</div></td>
                    <td><div>{customer.company}</div></td>
                    <td><div>{customer.tel}</div></td>
                    <td><div>{customer.email}</div></td>
                    <td><div>{customer.country}</div></td>
                    <td className={renderCustomerStatus(customer)}><div><span>{customer.status}</span></div></td>
                </tr>
        ));
    }

    const onBurgerClick = () => {
        setSidebarIsActive(prev => !prev);
    }

    const onClearSearch = (search: HTMLInputElement | null) => {
        setSearchValue('');
        search?.focus();
    };

    return (
        <div className={styles.home}>
            <div className={styles.homeHeader}>
                <div className={styles.burger} onClick={onBurgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2>Hello Evano 👋🏼,</h2>
            </div>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <div className={styles.text}>
                        <h1>All Customers</h1>
                        <span>Active Members</span>
                    </div>
                    <div className={styles.search}>
                        <svg className={styles.searchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <input type="text" placeholder='Search' ref={searchRef} maxLength={40} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                        <div className={`${styles.searchClose} ${searchValue? styles.active: ''}`} onClick={() => onClearSearch(searchRef.current)}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m20.08 18.616-2.449-2.45 2.449-2.448c.944-.944-.52-2.409-1.465-1.464l-2.448 2.448-2.45-2.448c-.943-.944-2.408.52-1.463 1.464l2.448 2.449-2.448 2.448c-.945.945.52 2.41 1.464 1.465l2.449-2.449 2.448 2.449c.945.944 2.41-.52 1.465-1.464Z" fill="#B5B5B5"/></svg>
                        </div>
                    </div>
                </div>
                {
                    renderCustomers().length === 0 ? <h2 className={styles.notFound}>Customers not found</h2>: (
                        <>
                            <div className={styles.tableContainer}>
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td style={{paddingRight: '16px'}}>Customer Name</td>
                                            <td style={{paddingRight: '35px'}}>Company</td>
                                            <td style={{paddingRight: '16px'}}>Phone Number</td>
                                            <td style={{paddingRight: '19px'}}>Email</td>
                                            <td style={{paddingRight: '51px'}}>Country</td>
                                            <td style={{paddingLeft: '15px'}}>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderCustomers()}
                                    </tbody>
                                </table>
                            </div>
                
                            <div className={styles.tableFooter}>
                                <span>Showing data 1 to 8 of  256K entries</span>
                                <div className={styles.pagination}>
                                    
                                    <ul className={styles.pages}>
                                        <li><a href="/"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.936 6.392.176 3.668 2.936.944h1.728L1.892 3.668l2.772 2.724H2.936Z" fill="#404B52"/></svg></a></li>
                                        <li className={styles.active}><a href="/">1</a></li>
                                        <li><a href="/">2</a></li>
                                        <li><a href="/">3</a></li>
                                        <li><a href="/">4</a></li>
                                        <li style={{alignSelf: 'flex-end'}}>...</li>
                                        <li><a href="/">40</a></li>
                                        <li><a href="/"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.344.944h1.728l2.76 2.724-2.76 2.724H.344l2.772-2.724L.344.944Z" fill="#404B52"/></svg></a></li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Home;