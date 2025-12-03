import clsx from "clsx";

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
        <Office name="Wien" invert={invert}>
          Kalvarienberggasse 17/1
          <br />
          1170 Wien
          <br />
          <br />
          <a href="tel:+4369915121472" className={invert ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"}>
            +43 699 15121472
          </a>
          <br />
          <a href="mailto:office@786.at" className={invert ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"}>
            office@786.at
          </a>
        </Office>
      </li>
      <li>
        <Office name="Öffnungszeiten" invert={invert}>
          Montag - Freitag: 08:00 - 17:00
          <br />
          Samstag: 09:00 - 12:00
          <br />
          Sonntag: Geschlossen
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
