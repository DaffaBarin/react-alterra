import { useHistory } from "react-router-dom";

const ListItem = ({item, hapusPengunjung}) => {
    const history = useHistory()
    const action = () => {
        history.push(
            {
                pathname: `/profile/${item.nama}`,
                state: {
                    data: item
                }
            }
        )
    }
    return (
        <tr>
            <td style={{border: "1px solid black"}} onClick={action}>{item.nama}</td>
            <td style={{border: "1px solid black"}}>{item.umur}</td>
            <td style={{border: "1px solid black"}}>{item.jenisKelamin}</td>
            <td>
                <button onClick={() => {hapusPengunjung(item.id)}}>Hapus</button>
            </td>
        </tr>
    )
}

export default ListItem