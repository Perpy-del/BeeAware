import { Textarea } from '@/components/ui/textarea';
import { ConsultFormProps } from './FormNameComponent';

const FormComplaintComponent = (props: ConsultFormProps) => {
  return (
    <div className="pb-10 pt-5">
      <label
        htmlFor="complaint"
        className="block mb-2 font-ba_normal sm:text-bodySize md:text-headerSix text-baDark dark:text-baLight"
      >
        Complaint
      </label>
      <Textarea
        name="complaint"
        id="complaint"
        value={props.propValue}
        placeholder="Write Complaint starting with the type ranging from but not limited to Intimacy, Contraception, Communication, Puberty, Consent and STIs e.g. Consent: Is it wrong to request for consent before sex?"
        className="pl-3 py-4 rounded-[20px] flex w-full border border-input bg-baLight/15 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={props.onFormChange}
        rows={5}
      />
      {props.isInvalid && (
        <span className="text-[14px] font-ba_medium text-baWarning text-left">
          Please state your complaint.
        </span>
      )}
    </div>
  );
};

export default FormComplaintComponent;
