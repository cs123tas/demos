package edu.brown.cs.exploratories.applets.convolution;

public abstract interface CTFunctionController
{
  public abstract void setFunctionWindow(CTFunctionWindow paramCTFunctionWindow);
  
  public abstract void mouseStart(int paramInt1, int paramInt2);
  
  public abstract void mouseDrag(int paramInt1, int paramInt2);
  
  public abstract void mouseStop();
  
  public abstract void resize(int paramInt1, int paramInt2);
}


/* Location:              /Users/masonbartle/Downloads/convolution.jar!/edu/brown/cs/exploratories/applets/convolution/CTFunctionController.class
 * Java compiler version: 2 (46.0)
 * JD-Core Version:       0.7.1
 */