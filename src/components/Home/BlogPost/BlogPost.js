import React from 'react';

const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div className="col-md-4 m-2">
            <div class="card mb-3" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={authorImg} alt="..." />
                        <div>
                            <h6 style={{ color: '#1CC7C1' }}>{author}</h6>
                            <p className="m-0 text-secondary">{date}</p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;