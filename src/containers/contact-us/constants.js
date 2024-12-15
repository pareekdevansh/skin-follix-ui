import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER } from "../../constants/contact-info";
import { trackLocationClick, trackCallEvent, trackEmailClick } from "../../analytics";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import { ADDRESS_LINE1, ADDRESS_LINE2, ADDRESS_LINE3, LOCATION_LINK } from "../../constants/address";
export const contactData = [
    {
        icon: <LocationOnIcon />,
        label: 'Our Location',
        value: (
            <>
                {ADDRESS_LINE1} <br />
                {ADDRESS_LINE2} <br />
                {ADDRESS_LINE3}
            </>
        ),
        href: LOCATION_LINK,
        trackEventFunc: trackLocationClick,
    },
    {
        icon: <PhoneIcon />,
        label: 'Call Us',
        value: CONTACT_PHONE_NUMBER,
        href: `tel:+91${CONTACT_PHONE_NUMBER}`,
        trackEventFunc: trackCallEvent,
    },
    {
        icon: <Email />,
        label: 'Email Us',
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
        trackEventFunc: trackEmailClick,
    },
];