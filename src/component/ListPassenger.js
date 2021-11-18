import ListItem from './ListItem';
import { gql, useQuery,useLazyQuery, useMutation } from '@apollo/client';
import { useState } from 'react';

const ListPassenger = (props) => {
    const [viewId, setId] = useState('');
    const [userData, setUserData] = useState([]);
    const [isEdit, setEdit] = useState(null);
    const [editingText, setEditingText] = useState('');

    const getDataList = gql`
        query MyQuery {
            anggota{
                id
                jenisKelamin
                nama
                umur
            }
        }
    `;
        
    const editDataList = gql`
        mutation MyMutation($id: Int!, $nama: String!) {
            update_anggota(where: { id: { _eq: $id } }, _set: { nama: $nama }) {
                returning {
                    id
                    jenisKelamin
                    nama
                    umur
                }
            }
        }
    `;

    const deleteDataList = gql`
        mutation MyMutation($id: Int!) {
            delete_anggota_by_pk(id: $id) {
                nama
            }
        }
    `;
    const { data, loading, error, refetch } = useQuery(getDataList);
    const [editData, { data: dataMutation, loading: loadingMutation, error: errorMutation }] = useMutation(
        editDataList,
        { refetchQueries: [getDataList] }
    );

    const [deleteData, { loading: dataDeleteLoading }] = useMutation(deleteDataList, { refetchQueries: [getDataList] });

    const onClickData = () => {
        console.log('clicked');
    };

    const onInputId = (e) => {
        if (e.target) {
            setId(e.target.value);
        }
    };

    const hapusPengunjung = (id) => {
        deleteData({ variables: { id: id } });
    };

    const setEditId = (id) => {
        if (id) {
            setEdit(id);
        }
    };
    const handleChangeEdit = (e) => {
        setEditingText(e.target.value);
    };
    const submitEdit = (id) => {
        editData({ variables: { id: id, nama: editingText } });
        setEdit(null);
        refetch();
    };
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: 'auto' }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.anggota.map((item) => (
                    <ListItem
                    key={item.id}
                    data={item}
                    loading={loading}
                    hapusPengunjung={hapusPengunjung}
                    setEditId={setEditId}
                    isEdit={isEdit}
                    setEditingText={setEditingText}
                    editingText={editingText}
                    handleChangeEdit={handleChangeEdit}
                    submitEdit={submitEdit}
                    loadingMutation={loadingMutation}
                />
                ))}
            </table>
        </div>
    );
};

export default ListPassenger;