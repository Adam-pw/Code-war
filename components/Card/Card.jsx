import React from "react";
import styles from "./Card.module.scss";


export default function Cardcomp(props) {
  return (
    <>




      <div className={styles.container}>
        {/* <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src="https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>Alice Clooney <br /> <span className={styles.spand}>Senior Front-end Developer</span></h2>
              <div className={styles.info}>
                <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>Follow</button>
                <button className={styles.bu1}>Message</button>
              </div>
            </div>
          </div>
        </div> */}



        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src={props.img} alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>{props.name} <br /> <span className={styles.spand}>{props.branch}</span></h2><br/>
              <div className={styles.info}>
                {/* <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3> */}
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>{props.github}</button>
                <button className={styles.bu1}>{props.linkedin}</button>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src="https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>Alice Clooney <br /> <span className={styles.spand}>Senior Front-end Developer</span></h2>
              <div className={styles.info}>
                <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>Follow</button>
                <button className={styles.bu1}>Message</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src="https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>Alice Clooney <br /> <span className={styles.spand}>Senior Front-end Developer</span></h2>
              <div className={styles.info}>
                <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>Follow</button>
                <button className={styles.bu1}>Message</button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src="https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>Alice Clooney <br /> <span className={styles.spand}>Senior Front-end Developer</span></h2>
              <div className={styles.info}>
                <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>Follow</button>
                <button className={styles.bu1}>Message</button>
              </div>
            </div>
          </div>
        </div>


      </div>


      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src="https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>Alice Clooney <br /> <span className={styles.spand}>Senior Front-end Developer</span></h2>
              <div className={styles.info}>
                <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>Follow</button>
                <button className={styles.bu1}>Message</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src="https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>Alice Clooney <br /> <span className={styles.spand}>Senior Front-end Developer</span></h2>
              <div className={styles.info}>
                <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>Follow</button>
                <button className={styles.bu1}>Message</button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src="https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h2 className={styles.head}>Alice Clooney <br /> <span className={styles.spand}>Senior Front-end Developer</span></h2>
              <div className={styles.info}>
                <h3 className={styles.head1}>93 <br /><span className={styles.span1}>Posts</span></h3>
                <h3 className={styles.head1}>170k <br /><span>Followers</span></h3>
                <h3 className={styles.head1}>842 <br /><span>Following</span></h3>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>Follow</button>
                <button className={styles.bu1}>Message</button>
              </div>
            </div>
          </div>
        </div>


      </div> */}
    </>
  )
}
