import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div style={{
            backgroundColor: 'black',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1 style={{
                color: 'white',
                fontSize: '3rem',
                fontFamily: inter.style.fontFamily,
            }}>
                codeIntrepid
            </h1>
        </div>
    )
}