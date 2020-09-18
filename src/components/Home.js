import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home(props) {
    const history = useHistory();

    return ( 
    <div className='home'>
        <button
            class-name='order'
            onClick={() => history.push('/pizza')}
            >
                Order Here!
        </button>

    </div> 
    );
}
