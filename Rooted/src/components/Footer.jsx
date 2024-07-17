import styles from '../style';
import { rootedlogo,LOGOseven } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} bg-primary flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full gap-10`}>
      <div className="flex-1 flex flex-col justify-start items-start">  {/* Removed margin-right and added items-start */}
        <img
          src={LOGOseven}
          alt="rootedlogo"
          className="w-[266px] h-[72px] object-contain"
        />
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap gap-10">  {/* Added gap-10 for spacing between columns */}
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
