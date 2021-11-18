import './Home.css';

const ListItem = (props) => {
    const { id, nama, umur, jenisKelamin} = props.data;
    console.log(nama)
    return (
        <tr>
            {props.loading ? (
                <p>Loading....</p>
            ) : (
                <>
                    {props.isEdit == id ? (
                        <td>
                            <input value={props.editingText} onChange={props.handleChangeEdit} />
                        </td>
                    ) : (
                        <td>{nama}</td>
                    )}
                    <td>{umur}</td>
                    <td>{jenisKelamin}</td>
                    <td className="removeBorder">
                        <button onClick={() => props.hapusPengunjung(id)}>Hapus</button>
                        {props.isEdit == id ? (
                            <button onClick={() => props.submitEdit(id)}>Submit Edits</button>
                        ) : (
                            <button onClick={() => props.setEditId(id)}>Edit</button>
                        )}
                    </td>
                </>
            )}
        </tr>
    );
};

export default ListItem;