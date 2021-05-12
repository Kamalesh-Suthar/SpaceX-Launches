import classes from './card.module.css';

const Card = (props)=>{
    return(
        <div className={classes.MainDiv}>
            <div className={classes.ImageDiv}><img src={props.obj.image} alt=""/></div>
            <div className={classes.DescDiv}>
                <h3 className={classes.DetailsHeadings}>{props.obj.mission_name} <span>{props.obj.flight_number}</span></h3>
                <p className={classes.Details}>Mission Id: <span>{props.obj.mission_id}</span></p>
                <p className={classes.Details}>Launch Year: <span>{props.obj.launch_year}</span></p>
                <p className={classes.Details}>Successful Launch: <span>{props.obj.success_launch?"Success": "Failure"}</span></p>
                <p className={classes.Details}>Successful Landing: <span>{props.success_land?"Success": "Failure"}</span></p>
            </div>
        </div>
    )
}

export default Card;