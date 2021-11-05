import { useHistory } from "react-router";

const Profile = (props) => {

    const { id , nama , umur, jenisKelamin} = props.location.state.data;
    const history = useHistory();

    const goHome = () => {
        history.goBack();
    }
    return(
        <div>
            <div className = "header">
                <h1>Info Pengunjung</h1>
                <p>Pengunjung bernama {nama}, dia seorang {jenisKelamin} berumur {umur} tahun</p>
                <p>Id user : {id}</p>
                <button onClick={goHome}>Go Home</button>
            </div>
        </div>
    )
}

export default Profile;