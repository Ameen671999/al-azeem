export interface Invoice{
    _id:string;
    invoiceNo:string;
    orderId:string;
    orderBillNo:string;
    HSNcode: number;
    SGST: number;
    CGST: number;
    IGST:number;
    eWayBillNo:number;
    vehicleNo:string;
    transporterName:string;
    lastUpdatedDate:string;
    creator:string;
}