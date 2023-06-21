export class CreateLinkDto {
    user_id: string;
    domain: string;
    origin_link: string;
    short_link: string;
    date_expires: string;
    password: string
    counter: number
}
