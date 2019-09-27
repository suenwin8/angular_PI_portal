export class APIResponse<T> {
    public IsSuccess: boolean;
    public ErrorCode: string;
    public ErrorMessage: string;
    public TotalCount: number;
    public Response: T;
    public IsLogged: boolean;
    public ResponseText: string;
    // constructor
    constructor(Response: T) {
        this.Response = Response;
    }

    public static ReturnValidResponse<T>(msObj: T): APIResponse<T> {
        const Response: APIResponse<T> = {
            IsSuccess: true
            , ErrorCode: null
            , ErrorMessage: null
            , TotalCount: 0
            , Response: msObj
            , IsLogged: true
            , ResponseText: null
        };

        return Response;
    }
    // public static ReturnValidResponse<T>(msObj: T, ResponseText: string): APIResponse<T> {
    //     var Response = __init(new APIResponse<T>(), { IsSuccess: true });
    //     Response.Response = msObj;
    //     Response.ResponseText = ResponseText;
    //     return Response;
    // }
    // public static ReturnFailResult<T>(msObj: T, ErrorMessage: string, ResponseText: string): APIResponse<T> {
    //     var Response = __init(new APIResponse<T>(), { IsSuccess: false });
    //     Response.Response = msObj;
    //     Response.ResponseText = ResponseText;
    //     Response.ErrorMessage = ErrorMessage;
    //     return Response;
    // }
    // public static ReturnFailResult<T>(msObj: T, ErrorMessage: string, ResponseObject: Object): APIResponse<T> {
    //     var Response = __init(new APIResponse<T>(), { IsSuccess: false });
    //     Response.Response = msObj;
    //     Response.ResponseText = JsonConvert.SerializeObject(ResponseObject);
    //     Response.ErrorMessage = ErrorMessage;
    //     return Response;
    // }
    // public static ReturnFailResult<T>(message: string, ex: Exception = null): APIResponse<T> {
    //     return __init(new APIResponse<T>(), {
    //         IsSuccess: false,
    //         ErrorMessage: (ex == null) ? message : ex.Message
    //     });
    // }
}
