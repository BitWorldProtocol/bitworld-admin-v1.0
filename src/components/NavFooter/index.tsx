import styles from './index.module.less'

const NavFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href='https://www.imooc.com/u/1343480' target='_blank' rel='noreferrer'>
          BitWorld Protocol
        </a>
        <span className='gutter'>|</span>
        <a href='https://coding.imooc.com/class/644.html' target='_blank' rel='noreferrer'>
          BitWorld Protocol PlatForm
        </a>
        <span className='gutter'>|</span>
        <a href='https://coding.imooc.com/class/397.html' target='_blank' rel='noreferrer'>
          BitWorld Protocol Mall PlatForm
        </a>
      </div>
      <div>Copyright ©2024 BitWorld Protocol All Rights Reserved.</div>
    </div>
  )
}

export default NavFooter
