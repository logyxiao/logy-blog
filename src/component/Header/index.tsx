import React, { useState } from 'react'
import styles from './index.module.less'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const Links = [
  {
    title:'首页',
    url:'/',
    key: 0
  },
{
    title:'文章',
    url:'/article/',
    key: 1
},
]

const Header: React.FC = () => {
    const [activeNav,setActive] = useState(0)

    return (
      <div className={styles.HeaderWrap}>
        <div className={styles.container}>
            <img src=""
                 className={styles.logo} alt="Linmi"/>
            <div className={styles.menu}>
                {Links.map((item, index) => {
                    const itemStyle = classnames(
                      {
                          [styles.menuItem]: true,
                          [styles.menuActiveItem]: item.key===activeNav,
                      })
                    return    <Link className={itemStyle} key={index} to={item.url}
                        onClick={()=>{setActive(item.key)}
                        }
                    >
                        <div className="title">{item.title}</div>
                    </Link>
                })}
            </div>
        </div>
      </div>
    );
};

export default Header;
