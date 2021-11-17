import ListItem from './ListItem';
import { gql, useQuery,useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const ListPassenger = (props) => {
    const [viewId, setId] = useState('');
    const [userData, setUserData] = useState([]);

    const getDataListQuery = gql`
        query MyQuery($id: Int!) {
            anggota(where: { id: { _eq: $id } }) {
                id
                jenisKelamin
                nama
                umur
            }
        }
    `;

    const [getData, { data, loading, error }] = useLazyQuery(getDataListQuery);
    console.log(data);
    const onClickData = () => {
        getData({
            variables: {
                id: viewId,
            },
        });
        setUserData(data?.anggota);
    };

    const onInputId = (e) => {
        if (e.target) {
            setId(e.target.value);
        }
    };
    return (
        <div>
            <input value={viewId} onChange={onInputId} />
            <button onClick={onClickData}>Get Data</button>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: 'auto' }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.anggota.map((item) => (
                    <ListItem key={item.id} data={item} loading={loading} hapusPengunjung={props.hapusPengunjung} />
                ))}
            </table>
        </div>
    );
};

export default ListPassenger;