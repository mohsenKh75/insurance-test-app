"use client";
import {
  getInsuranceCompaniesData,
  getInsuranceDiscountsData,
  getVehiclesData,
} from "@/apis";
import { useRequest } from "@/hooks/useRequest";
import { Button, Dropdown, PageTitle } from "@/components/shared";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ArrowLeft from "~/main/arrowLeft.svg";
import ArrowRight from "~/main/arrowRight.svg";
import ArrowDown from "~/main/arrowDownColored.svg";
import { MainLayout } from "../MainLayout";
import Sheet from "react-modal-sheet";
import Image from "next/image";
import { Header } from "@/components/shared/Header";

const INPUT_DATA = {
  carTypeInput: "carTypeInput",
  insuranceCompany: "insuranceCompany",
  discountPercent: "discountPercent",
} as const;

function stepTitleHandler(step: keyof typeof INPUT_DATA) {
  if (step === "carTypeInput") {
    return "نوع خودرو خود را انتخاب کنید.";
  }
  if (step === "insuranceCompany") {
    return "شرکت بیمه گر قبلی خود را انتخاب کنید";
  }
  if (step === "discountPercent") {
    return "درصد تخفیف بیمه شخص ثالث را وارد کنید";
  }
}
export default function SelectInsurance() {
  const [step, setStep] = useState<keyof typeof INPUT_DATA>("carTypeInput");
  const [selectedItems, setSelectedItems] = useState({
    carTypeInput: "",
    insuranceCompany: "",
    discountPercent: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, setValue, watch } = useForm();

  function selectOptionHandler(option: string) {
    if (step === INPUT_DATA.carTypeInput) {
      setValue("carTypeInput", option);
      setSelectedItems({ ...selectedItems, carTypeInput: option });
    }
    if (step === INPUT_DATA.insuranceCompany) {
      setValue("insuranceCompany", option);
      setSelectedItems({ ...selectedItems, insuranceCompany: option });
    }
    if (step === INPUT_DATA.discountPercent) {
      setValue("discountPercent", option);
      setSelectedItems({ ...selectedItems, discountPercent: option });
    }
  }

  const { data: vehiclesData } = useRequest(getVehiclesData);
  const { data: companiesData } = useRequest(getInsuranceCompaniesData);
  const { data: discountData } = useRequest(getInsuranceDiscountsData);

  function submitHandler() {
    setIsModalOpen(true);
  }

  function stepUpHandler() {
    if (step === INPUT_DATA.carTypeInput) {
      setStep(INPUT_DATA.insuranceCompany);
    }
    if (step === INPUT_DATA.insuranceCompany) {
      setStep(INPUT_DATA.discountPercent);
    }
    if (step === INPUT_DATA.discountPercent) {
      handleSubmit(submitHandler)();
    }
  }
  function stepDownHandler() {
    if (step === INPUT_DATA.discountPercent) {
      setStep(INPUT_DATA.insuranceCompany);
    }
    if (step === INPUT_DATA.insuranceCompany) {
      setStep(INPUT_DATA.carTypeInput);
    }
  }
  useEffect(() => {
    setValue(INPUT_DATA[step], "");
  }, [step]);
  console.log({ vehiclesData });

  return (
    <MainLayout>
      <PageTitle title="بیمه شخص ثالث" />
      <p className="pt-4 text-sm text-gray-400">{stepTitleHandler(step)}</p>
      <div className="flex flex-col h-full justify-center">
        <div className="h-1/6 z-10">
          <Dropdown
            register={register}
            placeholder={
              step === "carTypeInput"
                ? "نوع خودرو"
                : step === "insuranceCompany"
                ? "بیمه‌گر قبلی"
                : "درصد تخفیف"
            }
            id={
              step === "carTypeInput"
                ? "carTypeInput"
                : step === "insuranceCompany"
                ? "insuranceCompany"
                : "discountPercent"
            }
            selectOptionHandler={selectOptionHandler}
            options={
              step === "carTypeInput"
                ? vehiclesData
                : step === "insuranceCompany"
                ? companiesData
                : discountData
            }
            optionIdProp="id"
            optionTitleProp="title"
          />
        </div>
        <div className="flex justify-between pt-4 z-0">
          <Button
            rightIcon={ArrowRight}
            shape="outlined"
            onClick={stepDownHandler}
          >
            بازگشت
          </Button>
          {selectedItems[step] !== undefined && selectedItems[step] !== "" && (
            <Button
              leftIcon={step !== INPUT_DATA.discountPercent && ArrowLeft}
              shape="outlined"
              onClick={stepUpHandler}
            >
              {step === INPUT_DATA.discountPercent
                ? "استعلام قیمت"
                : "مرحله بعد"}
            </Button>
          )}
        </div>
      </div>
      <Sheet
        snapPoints={[300]}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Sheet.Container>
          <Sheet.Header>
            <div className="w-full flex flex-col items-center py-4 gap-2">
              <Button
                shape="outlined"
                buttonType="CIRCLE"
                onClick={() => setIsModalOpen(false)}
              >
                <Image src={ArrowDown} alt="arrowDown" width={12} />
              </Button>
              <Header title="خلاصه اطلاعات" />
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <div className="flex flex-col px-4 h-full justify-around text-teal-600">
              <div className="flex justify-between text-">
                <p>نوع خودرو</p>
                <p>{selectedItems.carTypeInput}</p>
              </div>
              <div className="flex justify-between">
                <p>بیمه‌گر قبلی</p>
                <p>{selectedItems.insuranceCompany}</p>
              </div>
              <div className="flex justify-between">
                <p>میزان تخفیف</p>
                <p>{selectedItems.discountPercent}</p>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </MainLayout>
  );
}
