

const originLogoutSession = async ( user , setUser , base_url )=>{

    const dataUser = sessionStorage.getItem('user');

    
    if (dataUser) {
        try {
            const response = await fetch(base_url + '/logout', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${dataUser.token}`
                }
            });

            sessionStorage.removeItem('user');
            setUser('');
            const data = await response.json();

            return data;
        } catch (error) {
            console.error('Error during logout:', error);
        }
    } else {
        console.log('No hay un token almacenado en sessionStorage.');
    }

}

export default originLogoutSession