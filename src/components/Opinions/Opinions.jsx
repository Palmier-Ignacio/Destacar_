import React from 'react';
import opinionsData from '../../data/opinionsData';
import Opinion from '../Opinion/Opinion';

function Opinions() {
    return (
        <section className="opinions" id='opiniones'>  
            <div className="opinions-container">
                <div className='left-arrow'>
                    {'<'}
                </div>
                <ul>
                    {opinionsData.map((opinion, idx) => (
                        <li key={opinion + idx}>
                            <Opinion
                                author={opinion.author}
                                opinion={opinion.opinion}
                                stars={opinion.stars}
                            />
                        </li>
                    ))}
                </ul>
                <div className='right-arrow'>
                    {'>'}
                </div>
            </div>
        </section>
    )
}
export default Opinions;