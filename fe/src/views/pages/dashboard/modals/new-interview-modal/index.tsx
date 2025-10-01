import { Input } from "@/views/components/input";
import { Button } from "@/views/components/button";
import { useNewInterviewModalController } from "./use-new-interview-modal-controller";
import { InputCurrency } from "@/views/components/input-currency";
import { useNewInterviewModalForm } from "./use-new-interview-modal-form";
import { Controller } from "react-hook-form";
import { Textarea } from "@/views/components/textarea";
import { SelectInput } from "@/views/components/select-input";
import { DatePickerInput } from "@/views/components/date-picker-input";
import { Modal } from "@/views/components/modal";

export function NewInterviewModal() {
  const { isNewInterviewModalOpen, closeNewInterviewModal } =
    useNewInterviewModalController();

  const { handleSubmit, register, errors, control } =
    useNewInterviewModalForm();

  return (
    <Modal
      onOpenChange={closeNewInterviewModal}
      isOpen={isNewInterviewModalOpen}
      title="Create interview"
      description="Create a new interview record with company details, position and status"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Company Name */}
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company Name *
          </label>

          <Input
            id="companyName"
            {...register("companyName")}
            placeholder="e.g. Google, Microsoft, Apple"
            error={errors.companyName?.message}
          />
        </div>

        {/* Role */}
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

        {/* Salary */}
        <div className="space-y-2">
          <label htmlFor="salary" className="text-sm font-medium">
            Salary
          </label>

          <Controller
            control={control}
            name="salary"
            render={({ field: { onChange, value } }) => (
              <InputCurrency
                onChange={onChange}
                value={value}
                error={errors.salary?.message}
              />
            )}
          />
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label htmlFor="status" className="text-sm font-medium">
            Status *
          </label>

          <Controller
            control={control}
            name="status"
            render={({ field: { value, onChange } }) => (
              <SelectInput
                triggerPlaceholder="Choose an status"
                data={["APPROVED", "PENDING", "REJECTED"]}
                error={errors.status?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>

        {/* Applied Date */}
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

        {/* Description */}
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

        {/* Actions */}
        <div className="space-y-2 pt-4">
          <Button type="submit">Create Interview</Button>

          <Button
            type="button"
            variant="outline"
            onClick={closeNewInterviewModal}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
