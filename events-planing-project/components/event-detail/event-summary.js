import classes from './event-summary.module.css';
import {useRouter} from "next/router";
import ArrowBack from "../icons/arrow-back";

function EventSummary(props) {
    const {title} = props;
    const router = useRouter()

    function goBack() {
        router.back()
    }

    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
            <span className={classes.icon} onClick={goBack}>
                <ArrowBack/>
            </span>
        </section>
    );
}

export default EventSummary;
