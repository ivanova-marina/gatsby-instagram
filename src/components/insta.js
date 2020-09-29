import React from 'react';
import Image from 'gatsby-image';
import useInstagram from '../hooks/use-instagram';
import containerStyles from "./insta.module.css"

const Insta = () => {
    const instaPhotos = useInstagram();
    const { username } = instaPhotos[0];
    return (
        <>
            <h2 >Instagram posts from #{username}</h2>
            <div className={containerStyles.insta}>
                {instaPhotos.map(photo => (
                    <a className={containerStyles.photo}
                        key={photo.id}
                        href={`https://instagram.com/p/${photo.id}`}
                    >
                    <Image
                        fluid={photo.fluid}
                        alt={photo.caption}
                    />
                    </a>
                ))}
            </div>
        </>
    )
}

export default Insta;