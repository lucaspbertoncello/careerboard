import { Modal } from "@/views/components/modal";
import { useEditInterviewModalController } from "./use-edit-interview-modal-controller";
import { Input } from "@/views/components/input";
import { InputCurrency } from "@/views/components/input-currency";
import { SelectInput } from "@/views/components/select-input";
import { DatePickerInput } from "@/views/components/date-picker-input";
import { Textarea } from "@/views/components/textarea";
import { Button } from "@/views/components/button";

export function EditInterviewModal() {
  const { closeEditInterviewModal, isEditInterviewModalOpen } = useEditInterviewModalController();

  return (
    <Modal
      title="Edit interview"
      description="Update your interview details and keep everything up to date"
      isOpen={isEditInterviewModalOpen}
      onOpenChange={closeEditInterviewModal}
    >
      <form className="space-y-4">
        {/* company name */}
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company Name *
          </label>

          <Input id="companyName" placeholder="e.g. Google, Microsoft, Apple" />
        </div>

        {/* role */}
        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium">
            Role *
          </label>

          <Input id="role" placeholder="e.g. Frontend Developer, Product Manager" />
        </div>

        {/* salary */}
        <div className="space-y-2">
          <label htmlFor="salary" className="text-sm font-medium">
            Salary
          </label>

          <InputCurrency onChange={() => {}} />
        </div>

        {/* status */}
        <div className="space-y-2">
          <label htmlFor="status" className="text-sm font-medium">
            Status *
          </label>

          <SelectInput
            triggerPlaceholder="Choose an status"
            data={["APPROVED", "PENDING", "REJECTED"]}
          />
        </div>

        {/* applied date */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Applied Date *</label>

          <DatePickerInput value={new Date()} onChange={() => {}} />
        </div>

        {/* descriptions */}
        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description (Optional)
          </label>

          <Textarea placeholder="Role responsibilities, benefits, interview notes..." />
        </div>

        {/* actions */}
        <div className="space-y-2 pt-4">
          <Button type="submit">Update Interview</Button>
          <Button variant="destructive" type="button">
            Delete Interview
          </Button>

          <Button type="button" variant="outline" onClick={closeEditInterviewModal}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
