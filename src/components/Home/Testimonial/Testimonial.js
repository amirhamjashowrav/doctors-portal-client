import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div className="col-md-4 m-2">
            <div class="card mb-3" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} alt="..." />
                        <div>
                            <h6 style={{ color: '#1CC7C1' }}>{name}</h6>
                            <p className="m-0 text-secondary">{from}</p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">{quote}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;