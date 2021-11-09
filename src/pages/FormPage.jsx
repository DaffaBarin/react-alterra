import React, { useRef, useState } from 'react'
import styles from './FormPage.module.css'

export default function FormPage() {
  const initData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  }

  const errData = {
    nama: "",
    email: "",
    noHandphone: "",
  }

  const [data, setData] = useState(initData)
  const [errMsg, setErrMsg] = useState(errData)
  const regexName = /^[A-Za-z ]*$/
  const regexPhone = /^(\d{9,14})$/
  const regexemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const suratKesungguhan = useRef('')

  function setErr(name, message) {
    setErrMsg((prev) => ({ ...prev, [name]: message }));
  }

  const inputHandler = e => {
    const name = e.target.name
    const value = e.target.value

    if (name === "nama") {
      if (regexName.test(value)) {
        setErr(name, "")
      } else {
        setErr(name, "Nama Lengkap Harus Berupa Huruf")
      }
    }

    if (name === "email") {
      if (regexemail.test(value)) {
        setErr(name, "")
      } else {
        setErr(name, "Email Tidak Sesuai")
      }
    }

    if (name === "noHandphone") {
      if (regexPhone.test(value)) {
        setErr(name, "")
      } else {
        setErr(name, "No Handphone Tidak Sesuai")
      }
    }

    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    const keys = Object.keys(errMsg);
    let valid = keys.every((key) => errMsg[key] === "")
    if (!valid) {
      alert("Data Pendaftar Tidak Sesuai")
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
      resetData()
    }
    e.preventDefault()
  }

  const resetData = () => {
    setData(initData)
    setErrMsg("")
  }

  return (
    <>
      <h1 style={{ "text-align": "center" }}>Pendaftaran Peserta Coding Bootcamp</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap:
          <input type="text" name="nama" className={styles.input} value={data.nama} onChange={inputHandler} required />
        </label>
        <label>
          Email:
          <input type="text" name="email" className={styles.input} value={data.email} onChange={inputHandler} required />
          
        </label>
        <label>
          No Handphone:
          <input type="text" name="noHandphone" className={styles.input} value={data.noHandphone} onChange={inputHandler} required />
        </label>
        <label style={{ "margin": "unset" }}>
          Latar Belakang Pendidikan:
          <div>
            <input type="radio" name="pendidikan" value="IT" onChange={inputHandler} checked={data.pendidikan === "IT" ? true : false} required />
            <label style={{ "padding": "unset" }}>IT</label>
            <input type="radio" name="pendidikan" value="Non IT" onChange={inputHandler} checked={data.pendidikan === "Non IT" ? true : false} required />
            <label style={{ "padding": "unset" }}>Non IT</label>
          </div>
        </label>
        <label>
          Kelas Coding yang Dipilih:
          <select type="text" name="kelas" className={styles.input} value={data.kelas} onChange={inputHandler} required>
            <option value="" selected disabled hidden>Pilih Salah Satu Program</option>
            <option>Coding BackEnd with Golang</option>
            <option>Coding FrontEnd with ReactJS</option>
            <option>Fullstack Developer</option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan:
          <input type="file" className={styles.input} refs={suratKesungguhan} />
        </label>
        <label>
          Harapan Untuk Coding Bootcamp ini:
          <textarea name="harapan" id="" cols="30" rows="5" className={styles.input} value={data.harapan} onChange={inputHandler}></textarea>
        </label>
        
        <ul className={styles.aboveSubmit}>
            <li style={errMsg.nama ? {color : 'red'} : {display:'none'}}>• {errMsg.nama}</li>
            <li style={errMsg.email ? {color : 'red'} : {display:'none'}}>• {errMsg.email}</li>
            <li style={errMsg.noHandphone ? {color : 'red'} : {display:'none'}}>• {errMsg.noHandphone}</li>
        </ul>   
        <div>
          <input type="submit" className={styles.btn} value="Submit" />
          <button className={`${styles.btn} ${styles.btnReset}`} onClick={resetData}>Reset</button>
        </div>
      </form>
    </>
  )
}