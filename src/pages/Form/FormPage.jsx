import React, { useState } from "react";

export default function FormPage() {
    const baseData = {
        judul: "",
        pengarang: ""
    }

    const [data, setData] = useState(baseData);
    const usernameRegex = /^[A-Za-z ]*$/
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "pengarang") {
            if (!usernameRegex.test(value)) {
                setErrorMessage('Nama Pengarang Harus Berupa Huruf')
            } else {
                setErrorMessage('')
            }
        }

        setData({...data, [name]: value})
    }

    const resetForm = () => {
        setData(baseData)
    }

    const handleSubmit = e => {
        if (errorMessage === '') {
            resetForm()
        }
        e.preventDefault()
    }

    return (
        <>
            <h1 style={{'textAlign': 'center'}}>Formulir Buku Baru</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Judul: <br />
                    <input
                        type="text"
                        name="judul"
                        value={data.judul}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Pengarang: <br />
                    <input
                        type="text"
                        name="pengarang"
                        value={data.pengarang}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <span style={errorMessage ? {'color': 'red'}: null}>{errorMessage}</span>
                <br />
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}