import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as C from './styled';

export const Profile = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [address, setAdress] = useState(user.address);
    const [pass, setPass] = useState(user.pass);

    const handleUserRegister = () => {

        if (name != user.name) {
            dispatch({ type: 'SET_NAME', payload: name });
        }
        if (email != user.emal) {
            dispatch({ type: 'SET_EMAIL', payload: email });
        }
        if (phone != user.phone) {
            dispatch({ type: 'SET_PHONE', payload: phone });
        }
        if (address != user.address) {
            dispatch({ type: 'SET_ADDRESS', payload: address });
        }
        if (pass != user.pass) {
            dispatch({ type: 'SET_PASS', payload: pass });
        }
    }

    return (
        <C.PageArea>
            <C.TitlePage>Perfil do usuário</C.TitlePage>
            <C.container>
                <C.InputArea>
                    <C.Label>Nome:</C.Label>
                    <C.Input type='text' value={name} onChange={e => setName(e.target.value)} />
                </C.InputArea>

                <C.InputArea>
                    <C.Label>Email:</C.Label>
                    <C.Input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </C.InputArea>

                <C.InputArea>
                    <C.Label>Telefone:</C.Label>
                    <C.Input type='text' value={phone} onChange={e => setPhone(e.target.value)} />
                </C.InputArea>

                <C.InputArea>
                    <C.Label>Endereço:</C.Label>
                    <C.InputAreaBox value={address} onChange={e => setAdress(e.target.value)} />
                </C.InputArea>

                <C.InputArea>
                    <C.Label>Senha:</C.Label>
                    <C.Input type='password' value={pass} onChange={e => setPass(e.target.value)} />
                </C.InputArea>

                <C.ButtomUser onClick={handleUserRegister}>Salvar</C.ButtomUser>
            </C.container>
        </C.PageArea>
    );
}