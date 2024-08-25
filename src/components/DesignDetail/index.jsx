import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.css'
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Section } from '../Section';

export const DesignDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const project = data[id];
                setPost(project);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <main className="design sobre pb-5">
                <Section content="container" conteudo={
                    <div className="project-detail row py-5">
                        <div className="col-md-4">
                            <h1 className='mb-0'>
                                <span>
                                    {post.title}
                                </span>
                            </h1>
                            <h2>
                                <span>
                                    {post.sub}
                                </span>
                            </h2>
                        </div>
                        <div className="col-md-8">
                            <p>{post.description}</p>
                        </div>
                        <div className="photos">
                            {post.photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                />
                            ))}
                        </div>
                    </div>
                }>
                </Section>
            </main>
            <Footer />
        </>
    );
};
