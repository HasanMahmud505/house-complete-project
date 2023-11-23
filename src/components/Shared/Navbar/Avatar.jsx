import { useContext } from 'react';
import avatarImg from '../../../assets/image/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
const {user} = useContext(AuthContext)

    return (
        <div>
            <img className=' rounded-full' src={user && user.photoURL ? user.photoURL : avatarImg} alt="avatar" width='30' height='30'/>
        </div>
    );
    
};

export default Avatar;