import '../App.css'

export const TimeLineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="type" style={{ background: data.category.color}}>
                {data.category.type}
            </span>
            <time>{data.year}</time>
            <p>{data.description}</p>
            <img src={data.img}/>
            <span className="circle"/>
        </div>
    </div>
)