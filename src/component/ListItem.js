import './Home.css';

const ListItem = (props) => {
    const { id, nama, umur, jenisKelamin, loading } = props.data;
    console.log(nama)
    return (
        <tr>
            {loading ? (
                <p>Loading....</p>
            ) : (
                <>
                    <td>{nama}</td>
                    <td>{umur}</td>
                    <td>{jenisKelamin}</td>
                    <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
                        <button>Hapus</button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default ListItem;