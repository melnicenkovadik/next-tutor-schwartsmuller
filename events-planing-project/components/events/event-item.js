import classes from "./event-item.module.css";
import Button from "../ui/button";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";

export default function EventItem(props) {
    const {
        id,
        title,
        location,
        date,
        image,
    } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-EN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formatedAdress = location.replace(',', '\n');
    const explorerLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <span className={classes.icon}>
                        <DateIcon/>
                        </span>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address className={classes.address}>
                               <span className={classes.icon}>
                        <AddressIcon/>
                                     </span>
                            {formatedAdress}
                        </address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={explorerLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}
