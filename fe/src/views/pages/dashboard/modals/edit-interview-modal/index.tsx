import { Modal } from "@/views/components/modal";
import { useEditInterviewModalController } from "./use-edit-interview-modal-controller";
import { Input } from "@/views/components/input";
import { InputCurrency } from "@/views/components/input-currency";
import { SelectInput } from "@/views/components/select-input";
import { DatePickerInput } from "@/views/components/date-picker-input";
import { Textarea } from "@/views/components/textarea";
import { Button } from "@/views/components/button";
import { useEditInterviewModalForm } from "./use-edit-interview-modal-form";
import { Controller } from "react-hook-form";

export function EditInterviewModal() {
  const { closeEditInterviewModal, isEditInterviewModalOpen } = useEditInterviewModalController();
  const {
    handleSubmit,
    register,
    handleDelete,
    isDeletingInterview,
    isUpdatingInterview,
    errors,
    control,
  } = useEditInterviewModalForm();

  return (
    <Modal
      title="Edit interview"
      description="Update your interview details and keep everything up to date"
      isOpen={isEditInterviewModalOpen}
      onOpenChange={closeEditInterviewModal}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* company name */}
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company Name *
          </label>

          <Input
            id="companyName"
            placeholder="e.g. Google, Microsoft, Apple"
            {...register("companyName")}
            error={errors.companyName?.message}
          />
        </div>

        {/* role */}
        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium">
            Role *
          </label>

          <Input
            id="role"
            placeholder="e.g. Frontend Developer, Product Manager"
            {...register("role")}
            error={errors.role?.message}
          />
        </div>

        {/* salary */}
        <div className="space-y-2">
          <label htmlFor="salary" className="text-sm font-medium">
            Salary
          </label>

          <Controller
            name="salary"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputCurrency onChange={onChange} value={value} error={errors.salary?.message} />
            )}
          />
        </div>

        {/* status */}
        <div className="space-y-2">
          <label htmlFor="status" className="text-sm font-medium">
            Status *
          </label>

          <Controller
            control={control}
            name="status"
            render={({ field: { onChange, value } }) => (
              <SelectInput
                triggerPlaceholder="Choose an status"
                onChange={onChange}
                value={value}
                error={errors.status?.message}
                data={["APPROVED", "PENDING", "REJECTED"]}
              />
            )}
          />
        </div>

        {/* applied date */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Applied Date *</label>

          <Controller
            control={control}
            name="appliedAt"
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <DatePickerInput
                value={value}
                onChange={onChange}
                error={errors.appliedAt?.message}
              />
            )}
          />
        </div>

        {/* descriptions */}
        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description (Optional)
          </label>

          <Textarea
            placeholder="Role responsibilities, benefits, interview notes..."
            {...register("description")}
            error={errors.description?.message}
          />
        </div>

        {/* actions */}
        <div className="space-y-2 pt-4">
          <Button isLoading={isUpdatingInterview} type="submit">
            Update Interview
          </Button>
          <Button
            variant="destructive"
            type="button"
            onClick={handleDelete}
            isLoading={isDeletingInterview}
          >
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
