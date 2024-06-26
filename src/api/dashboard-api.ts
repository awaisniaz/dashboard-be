import { Router, Request, Response } from 'express';
import { fssScore } from '../data/fss-score';
const dashboardRoute = Router();

dashboardRoute.get('/get-dashboard-data', (req: Request, res: Response) => {
  const applyFilter  =  Object.keys(req?.query)?.length
  let fssScoredata:any = []
  if(applyFilter > 0){

  }else{
    fssScoredata = fssScore
  }
  res.send({data:fssScoredata});
});

export default dashboardRoute;
