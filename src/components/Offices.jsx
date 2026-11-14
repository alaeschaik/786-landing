import clsx from "clsx";
import { T } from "@/i18n/LanguageProvider";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name={<T de="Wien" en="Vienna" />} invert={invert}>
          Kalvarienberggasse 17/1
          <br />
          <T de="1170 Wien" en="1170 Vienna" />
          <br />
          <br />
          Syed Tayyab Hassan Naqvi
          <br />
          <a href="tel:+436767056207" className={invert ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"}>
            +43 676 7056207
          </a>
          <br />
          <a href="mailto:office@786.at" className={invert ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"}>
            office@786.at
          </a>
        </Office>
      </li>
      <li>
        <Office name={<T de="Öffnungszeiten" en="Opening hours" />} invert={invert}>
          <T de="Montag - Freitag: 08:00 - 17:00" en="Monday - Friday: 08:00 - 17:00" />
          <br />
          <T de="Samstag: Geschlossen" en="Saturday: Closed" />
          <br />
          <T de="Sonntag: Geschlossen" en="Sunday: Closed" />
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
