import { SocialMediaIconsReact } from 'social-media-icons-react';

export default function SocialMail() {
    // functions

    // returned component
    return (
        <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="double"
            icon="mail"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(52,58,64,1)"
            iconSize="5"
            roundness="20%"
            url="mailto: contact@filbert.io"
            size="40"
        />
    );
}
