public interface IFunctionController
{
  public abstract void setFunctionWindow(IFunctionWindow paramIFunctionWindow);
  
  public abstract void resize(int paramInt1, int paramInt2);
  
  public abstract void beginUpdate(DValue paramDValue);
  
  public abstract void valueUpdate();
  
  public abstract void endUpdate();
}


/* Location:              /Users/masonbartle/Downloads/impulse_response.jar!/IFunctionController.class
 * Java compiler version: 1 (45.3)
 * JD-Core Version:       0.7.1
 */