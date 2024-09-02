import React from "react";
import './index.css';

function Menu() {
    return (
        <div>
            <div className='topMenu'>
                <div className='proteins'>
                    <h2>Proteins</h2>
                    <div className='protein'>
                        <p>Carne, </p>
                        <p>Asada,</p>
                        <p>Chorizo,</p>
                        <p>Pollo,</p>
                        <p>Pastor,</p>
                        <p>Cabeza</p>
                    </div>
                </div>
                <div className='drinks'>
                    <h2>Drinks</h2>
                    <div className='drink'>
                        <p>Water,</p>
                        <p>Cocacola,</p>
                        <p>Jarritos</p>
                    </div>
                </div>
            </div>
            <div className='foodOptions'>
                <h2>Entrees</h2>
                <div className='entreeBox'>
                    <div className='tacos'>
                        <h3>Tacos</h3>
                        <div className="entreeContent">
                            <p>Experience a burst of authentic flavors with our tacos, crafted with your choice of succulent meat, fresh cilantro, and finely chopped onions. A true classic that brings the taste of Mexico right to your plate.</p>
                            <img src='https://scontent.fsgu1-1.fna.fbcdn.net/v/t39.30808-6/457623515_525010216678420_5790890795906156926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zihU7AqW3pAQ7kNvgEDkNOA&_nc_ht=scontent.fsgu1-1.fna&_nc_gid=AveE4m1ikKg6KDR2a0kYb9p&oh=00_AYCJ3Lb5--Vy6DKSeozajKOZ6Rf-4hB5M8_9-j_irAOFQA&oe=66DBE0FB' />
                        </div>
                    </div>
                    <div className='tortas'>
                        <h3>Tortas</h3>
                        <div className="entreeContent">
                            <p>Enjoy our mouthwatering Torta, featuring melted mozzarella cheese, refried beans, crisp lettuce, fresh onion, and your choice of tender meat, all served on a soft, freshly baked telera bread. A deliciously satisfying bite with every taste!</p>
                            <img src='https://scontent.fsgu1-1.fna.fbcdn.net/v/t39.30808-6/457623515_525010216678420_5790890795906156926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zihU7AqW3pAQ7kNvgEDkNOA&_nc_ht=scontent.fsgu1-1.fna&_nc_gid=AveE4m1ikKg6KDR2a0kYb9p&oh=00_AYCJ3Lb5--Vy6DKSeozajKOZ6Rf-4hB5M8_9-j_irAOFQA&oe=66DBE0FB' />
                        </div>
                    </div>
                    <div className='burritos'>
                        <h3>Burritos</h3>
                        <div className="entreeContent">
                            <p>Dive into our hearty burrito, filled with seasoned rice, slow-cooked beans, melted Monterrey cheese, and a sprinkle of cilantro and onion. Choose your favorite meat to complete this delicious handheld meal.</p>
                            <img src='https://scontent.fsgu1-1.fna.fbcdn.net/v/t39.30808-6/457623515_525010216678420_5790890795906156926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zihU7AqW3pAQ7kNvgEDkNOA&_nc_ht=scontent.fsgu1-1.fna&_nc_gid=AveE4m1ikKg6KDR2a0kYb9p&oh=00_AYCJ3Lb5--Vy6DKSeozajKOZ6Rf-4hB5M8_9-j_irAOFQA&oe=66DBE0FB' />
                        </div>
                    </div>
                    <div className='quesadillas'>
                        <h3>Quesadillas</h3>
                        <div className="entreeContent">
                            <p>Savor our quesadillas, where warm, gooey Monterrey cheese meets fresh cilantro, onion, and your choice of savory meat, grilled to perfection for a comforting, cheesy delight.</p>
                            <img src='https://scontent.fsgu1-1.fna.fbcdn.net/v/t39.30808-6/457623515_525010216678420_5790890795906156926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zihU7AqW3pAQ7kNvgEDkNOA&_nc_ht=scontent.fsgu1-1.fna&_nc_gid=AveE4m1ikKg6KDR2a0kYb9p&oh=00_AYCJ3Lb5--Vy6DKSeozajKOZ6Rf-4hB5M8_9-j_irAOFQA&oe=66DBE0FB' />
                        </div>
                    </div>
                    <div className='quesabirrias'>
                        <h3>Quesabirrias(weekend special)</h3>
                        <div className="entreeContent">
                            <p>Taste our Quesa Birrias, a delightful blend of melted mozzarella cheese, fresh cilantro, and onions, paired with tender, juicy birria for an unforgettable fusion of flavors.</p>
                            <img src='https://scontent.fsgu1-1.fna.fbcdn.net/v/t39.30808-6/457623515_525010216678420_5790890795906156926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zihU7AqW3pAQ7kNvgEDkNOA&_nc_ht=scontent.fsgu1-1.fna&_nc_gid=AveE4m1ikKg6KDR2a0kYb9p&oh=00_AYCJ3Lb5--Vy6DKSeozajKOZ6Rf-4hB5M8_9-j_irAOFQA&oe=66DBE0FB' />
                        </div>
                    </div>
                 </div>   
            </div>
        </div>
    );
}

export default Menu;
