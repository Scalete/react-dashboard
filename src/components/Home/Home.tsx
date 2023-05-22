import { FC } from 'react'
import styles from './Home.module.scss'
import { Customer, data } from '../../api/Customer';

const Home: FC = () => {

    //template customers
    const dataCustomers: Customer[] = data;

    const renderCustomerStatus = (customer: Customer): string => {
        return customer.status.toLocaleLowerCase() === 'active' ? styles.active: styles.inactive
    }
    
    const renderCustomers = () => {
        return dataCustomers.map((customer, i) => (
            <tr key={i}>
                <td>{customer.fullName}</td>
                <td>{customer.company}</td>
                <td>{customer.tel}</td>
                <td>{customer.email}</td>
                <td>{customer.country}</td>
                <td className={renderCustomerStatus(customer)}><span>{customer.status}</span></td>
            </tr>
        ));
    }

    return (
        <div className={styles.home}>
            <h2>Hello Evano 👋🏼,</h2>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <div className={styles.text}>
                        <h1>All Customers</h1>
                        <span>Active Members</span>
                    </div>
                    <div className={styles.search}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Customer Name</td>
                            <td>Company</td>
                            <td>Phone Number</td>
                            <td>Email</td>
                            <td>Country</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCustomers()}
                    </tbody>
                </table>
                <div className={styles.tableFooter}>
                    <span>Showing data 1 to 8 of  256K entries</span>
                    <div className={styles.pagination}>
                        
                        <ul className={styles.pages}>
                            <li><a href="/"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.936 6.392.176 3.668 2.936.944h1.728L1.892 3.668l2.772 2.724H2.936Z" fill="#404B52"/></svg></a></li>
                            <li className={styles.active}><a href="/">1</a></li>
                            <li><a href="/">2</a></li>
                            <li><a href="/">3</a></li>
                            <li><a href="/">4</a></li>
                            <li>...</li>
                            <li><a href="/">40</a></li>
                            <li><a href="/"><svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.344.944h1.728l2.76 2.724-2.76 2.724H.344l2.772-2.724L.344.944Z" fill="#404B52"/></svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;