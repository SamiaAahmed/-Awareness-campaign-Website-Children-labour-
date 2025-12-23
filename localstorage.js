import React, { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const users = [
        { username: "admin", password: "1234" },
        { username: "user1", password: "abcd" },
        { username: "user2", password: "xyz" }
    ];

    const handleLogin = () => {
        const foundUser = users.find(
            user => user.username === username && user.password === password
        );

        if (foundUser) {
            setMessage('تم تسجيل الدخول بنجاح!');
            setIsLoggedIn(true);
            setCurrentUser(foundUser.username);
        } else {
            setMessage('اسم المستخدم أو كلمة المرور غير صحيحة');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setUsername('');
        setPassword('');
        setMessage('');
    };

    if (isLoggedIn) {
        return ( <
            div style = {
                {
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #4ECDC4 0%, #F99413 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Arial, sans-serif'
                }
            } >
            <
            div style = {
                {
                    background: 'white',
                    padding: '60px 40px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    textAlign: 'center',
                    maxWidth: '500px',
                    width: '90%'
                }
            } >
            <
            div style = {
                {
                    width: '80px',
                    height: '80px',
                    background: '#4ECDC4',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '40px'
                }
            } > ✓
            <
            /div> <
            h2 style = {
                {
                    color: '#13140E',
                    fontSize: '28px',
                    marginBottom: '15px'
                }
            } >
            مرحباً { currentUser }!
            <
            /h2> <
            p style = {
                {
                    color: '#666',
                    fontSize: '18px',
                    marginBottom: '30px'
                }
            } >
            تم تسجيل الدخول بنجاح <
            /p> <
            button onClick = { handleLogout }
            style = {
                {
                    background: '#F99413',
                    color: 'white',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '50px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }
            } >
            تسجيل الخروج <
            /button> <
            /div> <
            /div>
        );
    }

    return ( <
        div style = {
            {
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #4ECDC4 0%, #F99413 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Arial, sans-serif',
                padding: '20px'
            }
        } >
        <
        div style = {
            {
                background: 'white',
                padding: '50px 40px',
                borderRadius: '15px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                maxWidth: '500px',
                width: '100%'
            }
        } >
        <
        h2 style = {
            {
                textAlign: 'center',
                color: '#13140E',
                fontSize: '32px',
                marginBottom: '10px'
            }
        } >
        تسجيل الدخول <
        /h2> <
        p style = {
            {
                textAlign: 'center',
                color: '#666',
                marginBottom: '30px',
                fontSize: '14px'
            }
        } >
        مرحباً بك!الرجاء إدخال بياناتك <
        /p>

        <
        div style = {
            { marginBottom: '25px' } } >
        <
        label style = {
            {
                display: 'block',
                marginBottom: '8px',
                color: '#13140E',
                fontSize: '16px',
                fontWeight: '500',
                textAlign: 'right'
            }
        } >
        اسم المستخدم <
        /label> <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        style = {
            {
                width: '100%',
                padding: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '16px',
                direction: 'rtl'
            }
        }
        placeholder = "أدخل اسم المستخدم" /
        >
        <
        /div>

        <
        div style = {
            { marginBottom: '25px' } } >
        <
        label style = {
            {
                display: 'block',
                marginBottom: '8px',
                color: '#13140E',
                fontSize: '16px',
                fontWeight: '500',
                textAlign: 'right'
            }
        } >
        كلمة المرور <
        /label> <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        style = {
            {
                width: '100%',
                padding: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '16px',
                direction: 'rtl'
            }
        }
        placeholder = "أدخل كلمة المرور" /
        >
        <
        /div>

        {
            message && ( <
                div style = {
                    {
                        padding: '12px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        background: message.includes('بنجاح') ? '#d4edda' : '#f8d7da',
                        color: message.includes('بنجاح') ? '#155724' : '#721c24',
                        fontSize: '14px'
                    }
                } > { message } <
                /div>
            )
        }

        <
        button onClick = { handleLogin }
        style = {
            {
                width: '100%',
                padding: '15px',
                background: '#F99413',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '20px'
            }
        } >
        تسجيل الدخول <
        /button>

        <
        div style = {
            {
                textAlign: 'center',
                fontSize: '14px',
                color: '#666',
                padding: '20px',
                background: '#f5f5f5',
                borderRadius: '8px'
            }
        } >
        <
        strong > حسابات تجريبية: < /strong><br/ >
        admin / 1234 < br / >
        user1 / abcd < br / >
        user2 / xyz <
        /div> <
        /div> <
        /div>
    );
}