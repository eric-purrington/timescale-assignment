import React from "react";

export default function BlogPost(props) {
    return (
        <div className="container">
            <img className="headshot" src={props.img} alt="headshot"/>
            <div className="postContainer">
                <h2>A little about me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris cursus, commodo leo dapibus, sagittis libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ultrices, nulla vitae porttitor congue, dui felis tempus arcu, sed consequat nibh mi venenatis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo dictum, placerat quam quis, laoreet mauris. Donec nunc enim, sodales ac aliquet id, sollicitudin sed turpis.</p>

                <p>Donec et nunc eget ipsum venenatis porttitor. Pellentesque eleifend elit sit amet congue aliquet. Aenean eu interdum sapien. Morbi ante dui, accumsan sed est ut, posuere varius nulla. Nam ut lorem vel turpis finibus rutrum sit amet in velit. Nam lectus massa, pellentesque at turpis nec, tristique viverra urna. Nam ut orci faucibus neque mattis vehicula.</p>

                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec laoreet hendrerit egestas. Nulla id massa aliquam, scelerisque metus in, ultrices nunc. Vestibulum eu dictum diam. Suspendisse at dolor at nunc mattis luctus tristique at mauris. Praesent sit amet urna sit amet sem tempus auctor sit amet vel tellus. Pellentesque id mi eget risus rhoncus efficitur. Maecenas nisi purus, ullamcorper nec bibendum eu, aliquet eu turpis. In sagittis nulla mi, ac consequat risus vestibulum quis.</p>

                <p>Phasellus efficitur, quam sed ultricies interdum, arcu tellus scelerisque risus, eget varius felis arcu eu lectus. Vivamus justo magna, efficitur in sagittis in, dignissim quis ipsum. Praesent dignissim imperdiet condimentum. Integer suscipit vel felis venenatis cursus. Praesent consectetur mauris urna, eu sagittis dui imperdiet eu.</p>

                <p>Quisque ante metus, lacinia ac felis non, ullamcorper iaculis leo. Maecenas vulputate sollicitudin ex id malesuada. Mauris eu felis cursus, facilisis ipsum vel, volutpat nulla. Cras porta lectus eu massa pretium, sed faucibus turpis convallis. Maecenas at commodo augue. Aenean egestas lorem arcu, a accumsan lorem sollicitudin sit amet. Suspendisse sed tincidunt felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent aliquet ex ex, non porta dui ullamcorper vitae.</p>

                <p>Suspendisse vulputate arcu in massa venenatis, eu bibendum lorem sodales. Vivamus ut sapien at sapien tempus ultrices. Fusce malesuada, augue ac placerat cursus, tellus tellus dictum arcu, vel pharetra orci erat ut ante.</p>
            </div>
        </div>
    )
}