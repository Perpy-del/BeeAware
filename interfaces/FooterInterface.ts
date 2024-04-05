export interface LinkInterface {
    href: string;
    text: string;
}

interface FooterInterface {
    header: string;
    links: LinkInterface[];
}

export default FooterInterface;