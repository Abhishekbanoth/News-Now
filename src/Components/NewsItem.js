import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const NewsItem =(props)=> {
    
        const { title, description, imageurl, newsurl, author, date, source }=props;
        const defaultImageUrl =
            "https://en.mynewsne.com/wp-content/uploads/2021/02/top_news_image.jpg";
        return (
            <div className="my-3">
                <Card>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            position: "absolute",
                            right: "0",
                        }}
                    >
                        <span
                            className="badge rounded-pill bg-danger"
                            style={{ left: "90%", zIndex: "1" }}
                        >
                            {source}
                        </span>
                    </div>
                    <Card.Img variant="top" src={imageurl || defaultImageUrl} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Body>
                        {/* <Card.Title>{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>{source}
    </span></Card.Title> */}
                        <Card.Text>{description}...</Card.Text>
                        <p className="card-tex">
                            <small className="text-muted">
                                by {author ? author : "Unknown"} on{" "}
                                {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <Button
                            className="btn btn-sm"
                            variant="dark"
                            href={newsurl}
                            target="_blank"
                        >
                            Read More
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }


export default NewsItem;
